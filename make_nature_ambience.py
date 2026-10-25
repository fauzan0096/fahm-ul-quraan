# Original nature ambience (code se bani): hawa + paani + parindon ki awaazein. Koi sample/recording istemal nahi hui.
import numpy as np
from scipy import signal
rng=np.random.default_rng(786)
SR=44100; DUR=120; XF=5          # 2 minute loop, 5 sec crossfade
N=(DUR+XF)*SR
t=np.arange(N)/SR

def noise(n): return rng.standard_normal(n)
def lp(x,f,o=2): return signal.sosfilt(signal.butter(o,f,'low',fs=SR,output='sos'),x)
def bp(x,lo,hi,o=2): return signal.sosfilt(signal.butter(o,[lo,hi],'band',fs=SR,output='sos'),x)
def slow(n,f,seed):                     # dheeme badalte lehar (0..1)
    r=np.random.default_rng(seed); x=lp(r.standard_normal(n),f,1); x=(x-x.min())/(x.max()-x.min()); return x

# ---- hawa ----
def wind(seed):
    x=lp(noise(N),380,2)+0.5*lp(noise(N),140,2)
    x/= np.abs(x).max(); return x*(0.35+0.65*slow(N,0.12,seed))**1.5
# ---- behta paani (chhote bulbule/lehrein) ----
def water(seed):
    x=bp(noise(N),900,3800,2)
    am=lp(np.abs(noise(N)),18,2); am/=am.max()
    x=x*(0.35+0.65*am)
    x+= 0.6*bp(noise(N),180,700,2)*(0.5+0.5*slow(N,0.3,seed+7))
    return x/np.abs(x).max()

L=0.40*wind(1)+0.09*water(2)
R=0.40*wind(3)+0.09*water(4)

# ---- parindon ke aawaz ----
def env(n,a=0.12,r=0.5):
    e=np.ones(n); na=max(1,int(n*a)); nr=max(1,int(n*r)); e[:na]=np.linspace(0,1,na)**1.5; e[-nr:]=np.linspace(1,0,nr)**1.5; return e
def glide(f0,f1,d,curve=1.0,vib=0,vibf=0):
    n=int(d*SR); u=np.linspace(0,1,n)**curve
    f=f0+(f1-f0)*u
    if vib: f=f*(1+vib*np.sin(2*np.pi*vibf*np.arange(n)/SR))
    ph=2*np.pi*np.cumsum(f)/SR
    s=np.sin(ph)+0.18*np.sin(2*ph)+0.05*np.sin(3*ph)
    return s*env(n)
def tweet(base):                         # chhoti chehchaha: 3-6 sur
    parts=[]
    for _ in range(rng.integers(3,7)):
        d=rng.uniform(0.06,0.14); up=rng.random()<0.5
        a=base*rng.uniform(0.9,1.15); b=a*(rng.uniform(1.15,1.4) if up else rng.uniform(0.7,0.88))
        parts.append(glide(a,b,d)); parts.append(np.zeros(int(rng.uniform(0.04,0.09)*SR)))
    return np.concatenate(parts)
def trill(base):                         # tez trill
    d=rng.uniform(0.5,1.1); return glide(base,base*rng.uniform(1.05,1.25),d,1.0,0.07,rng.uniform(22,34))*env(int(d*SR),0.2,0.4)
def whistle(base):                       # lambi surili siti
    ps=[]
    for _ in range(rng.integers(2,4)):
        d=rng.uniform(0.25,0.5); a=base*rng.uniform(0.85,1.1); ps.append(glide(a,a*rng.choice([0.8,1.25,1.5]),d,0.8,0.01,5)*env(int(d*SR),0.25,0.45)); ps.append(np.zeros(int(0.08*SR)))
    return np.concatenate(ps)
def dove():                              # kabootar/fakhta: "ghuu-ghoo-ghoo"
    ps=[]
    for k,(f,d) in enumerate([(520,0.35),(500,0.28),(500,0.28),(470,0.55)]):
        n=int(d*SR); ph=2*np.pi*np.cumsum(f*(1+0.012*np.sin(2*np.pi*5*np.arange(n)/SR)))/SR
        s=(np.sin(ph)+0.3*np.sin(2*ph))*env(n,0.3,0.55); ps.append(s); ps.append(np.zeros(int(0.12*SR)))
    return np.concatenate(ps)

def place(buf_l,buf_r,s,at,gain,pan):
    i=int(at*SR); j=min(N,i+len(s)); s=s[:j-i]
    buf_l[i:j]+=s*gain*np.sqrt(1-pan); buf_r[i:j]+=s*gain*np.sqrt(pan)

BL=np.zeros(N); BR=np.zeros(N)
# alag alag "parinde" — apni apni jagah (pan) aur apna waqfa
species=[('tweet',lambda:tweet(rng.uniform(3200,4300)),(2.5,7),0.10),
         ('tweet2',lambda:tweet(rng.uniform(2400,3000)),(4,10),0.10),
         ('trill',lambda:trill(rng.uniform(3600,4600)),(7,16),0.09),
         ('whistle',lambda:whistle(rng.uniform(1800,2600)),(9,20),0.10),
         ('dove',dove,(18,34),0.16)]
for name,fn,(lo,hi),g in species:
    pan=rng.uniform(0.15,0.85); at=rng.uniform(0.5,3)
    while at<DUR+XF-3:
        place(BL,BR,fn(),at,2.6*g*rng.uniform(0.7,1.2),pan+rng.uniform(-0.08,0.08) if 0<pan<1 else pan)
        at+=rng.uniform(lo,hi)
        if rng.random()<0.12: at+=rng.uniform(8,16)     # kabhi kabhi lambi khamoshi

# thodi gunj (reverb): decaying noise impulse response
ir_n=int(1.6*SR); ir=noise(ir_n)*np.exp(-np.linspace(0,6,ir_n)); ir=lp(ir,6000,1); ir/=np.abs(ir).sum()**0.5*8
wetL=signal.fftconvolve(BL,ir)[:N]; wetR=signal.fftconvolve(BR,ir)[:N]
BL=0.75*BL+0.9*wetL; BR=0.75*BR+0.9*wetR

L=L+BL; R=R+BR
# loop: aakhri XF second ko shuru se mila do (seamless)
def loopify(x):
    n=DUR*SR; xf=XF*SR; out=x[:n].copy(); fade=np.linspace(0,1,xf)
    out[:xf]=x[:xf]*fade+x[n:n+xf]*(1-fade); return out
L=loopify(L); R=loopify(R)
st=np.stack([L,R],1)
st=st-st.mean(0)
st=signal.sosfilt(signal.butter(2,60,'high',fs=SR,output='sos'),st,axis=0)
st/= np.percentile(np.abs(st),99.8)*1.15
st=np.clip(st,-1,1)*0.72
pcm=(st*32767).astype(np.int16)
import wave
with wave.open('nature_raw.wav','wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('peak',np.abs(st).max(),'rms',np.sqrt((st**2).mean()),'seam jump',np.abs(st[0]-st[-1]).max())
