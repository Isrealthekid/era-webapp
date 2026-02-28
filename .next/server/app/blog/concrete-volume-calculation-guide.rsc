1:"$Sreact.fragment"
2:I[7520,["545","static/chunks/545-dd3e42aeede34cf0.js","107","static/chunks/107-7b3c12e0a3752bec.js","118","static/chunks/118-3f24975cd642014e.js","17","static/chunks/17-44a0a366abc17aa7.js","278","static/chunks/278-e17aa1b61ee56040.js","177","static/chunks/app/layout-8b10f565ecc05b4a.js"],"Provider"]
3:I[704,["545","static/chunks/545-dd3e42aeede34cf0.js","107","static/chunks/107-7b3c12e0a3752bec.js","118","static/chunks/118-3f24975cd642014e.js","17","static/chunks/17-44a0a366abc17aa7.js","278","static/chunks/278-e17aa1b61ee56040.js","177","static/chunks/app/layout-8b10f565ecc05b4a.js"],"Toaster"]
4:I[4249,["545","static/chunks/545-dd3e42aeede34cf0.js","107","static/chunks/107-7b3c12e0a3752bec.js","118","static/chunks/118-3f24975cd642014e.js","17","static/chunks/17-44a0a366abc17aa7.js","278","static/chunks/278-e17aa1b61ee56040.js","177","static/chunks/app/layout-8b10f565ecc05b4a.js"],"Toaster"]
5:I[9766,[],""]
6:I[8924,[],""]
7:I[2619,["545","static/chunks/545-dd3e42aeede34cf0.js","991","static/chunks/991-752991b9d42498ff.js","619","static/chunks/619-3ba632d834111881.js","205","static/chunks/205-655c3e7f80c29638.js","956","static/chunks/956-e53eaf0ed4bd77f7.js","974","static/chunks/app/page-6d61c35e9c2197aa.js"],""]
9:I[4431,[],"OutletBoundary"]
b:I[5278,[],"AsyncMetadataOutlet"]
d:I[4431,[],"ViewportBoundary"]
f:I[4431,[],"MetadataBoundary"]
10:"$Sreact.suspense"
12:I[7150,[],""]
:HL["/_next/static/css/e4ece71528350d15.css","style"]
0:{"P":null,"b":"Q0-XBxYrIlnNhHrxoOn8q","p":"","c":["","blog","concrete-volume-calculation-guide"],"i":false,"f":[[["",{"children":["blog",{"children":[["slug","concrete-volume-calculation-guide","d"],{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/e4ece71528350d15.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","body",null,{"className":"antialiased","children":["$","$L2",null,{"children":[["$","$L3",null,{}],["$","$L4",null,{}],["$","$L5",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"flex min-h-screen items-center justify-center bg-muted","children":["$","div",null,{"className":"text-center","children":[["$","h1",null,{"className":"mb-4 text-4xl font-bold","children":"404"}],["$","p",null,{"className":"mb-4 text-xl text-muted-foreground","children":"Oops! Page not found"}],["$","$L7",null,{"href":"/","className":"text-primary underline hover:text-primary/90","children":"Return to Home"}]]}]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]]}]}]}]]}],{"children":["blog",["$","$1","c",{"children":[null,["$","$L5",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["slug","concrete-volume-calculation-guide","d"],["$","$1","c",{"children":[null,["$","$L5",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":["$L8",null,["$","$L9",null,{"children":["$La",["$","$Lb",null,{"promise":"$@c"}]]}]]}],{},null,false]},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,[["$","$Ld",null,{"children":"$Le"}],null],["$","$Lf",null,{"children":["$","div",null,{"hidden":true,"children":["$","$10",null,{"fallback":null,"children":"$L11"}]}]}]]}],false]],"m":"$undefined","G":["$12",[]],"s":false,"S":true}
13:I[3980,["545","static/chunks/545-dd3e42aeede34cf0.js","991","static/chunks/991-752991b9d42498ff.js","619","static/chunks/619-3ba632d834111881.js","205","static/chunks/205-655c3e7f80c29638.js","953","static/chunks/app/blog/%5Bslug%5D/page-1d9ab896bd3641a4.js"],"default"]
14:I[7461,["545","static/chunks/545-dd3e42aeede34cf0.js","991","static/chunks/991-752991b9d42498ff.js","619","static/chunks/619-3ba632d834111881.js","205","static/chunks/205-655c3e7f80c29638.js","953","static/chunks/app/blog/%5Bslug%5D/page-1d9ab896bd3641a4.js"],"default"]
15:T781,## Why Accuracy Matters

Ordering too much concrete wastes money. Ordering too little causes delays, cold joints, and potential structural issues. Accurate volume calculation is one of the most important practical skills for any site engineer.

## The Basic Formula

Concrete volume = Length × Width × Depth (in metres)

Simple enough for a single element, but real projects have dozens of elements with different dimensions, and you need to account for waste.

## Calculating for Common Elements

### Slabs
Volume = Length × Width × Thickness
For a 10m × 8m slab at 150mm thick: 10 × 8 × 0.15 = **12.0 m³**

### Beams
Volume = Length × Width × Depth
Remember to subtract the slab thickness if the beam is cast monolithically with the slab.

### Columns
Volume = Cross-section area × Height
For a 300mm × 300mm column, 3m high: 0.3 × 0.3 × 3 = **0.27 m³**

### Foundations
Pad foundations: Length × Width × Depth
Strip foundations: Total length × Width × Depth

## Accounting for Waste

Always add a waste factor:
- **5%** for well-organised sites with good formwork
- **7–10%** for typical Nigerian construction sites
- **10–15%** for complex shapes or difficult access

## Common Pitfalls

1. Forgetting to convert millimetres to metres
2. Not accounting for beam-slab junctions (double counting)
3. Ignoring the volume displaced by reinforcement (usually negligible, but significant for heavily reinforced elements)
4. Not checking the concrete grade — different elements may require different grades

## Pro Tips

- Always prepare a detailed schedule before ordering
- Cross-check your calculations with the structural drawings
- Coordinate with the batching plant on delivery timing
- Have a plan for excess concrete (blinding, kerbs, etc.)

At ERA, concrete volume calculation is practised extensively during our Site Supervision programme, using real project documents and site conditions.8:["$","$L13",null,{"children":["$","$L14",null,{"post":{"id":4,"slug":"concrete-volume-calculation-guide","title":"Concrete Volume Calculation: A Practical Site Guide","excerpt":"Getting concrete quantities wrong costs money and causes delays. Here's how to calculate accurately every time.","content":"$15","category":"Technical","author":"Engr. Tobi Akinwale","authorAvatar":"/placeholder.svg","coverImage":"/placeholder.svg","date":"2026-02-18","tags":["concrete","construction","site-engineering","calculation"],"published":true}}]}]
e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
a:null
c:{"metadata":[["$","title","0",{"children":"Concrete Volume Calculation: A Practical Site Guide - ERA Blog"}],["$","meta","1",{"name":"description","content":"Getting concrete quantities wrong costs money and causes delays. Here's how to calculate accurately every time."}]],"error":null,"digest":"$undefined"}
11:"$c:metadata"
