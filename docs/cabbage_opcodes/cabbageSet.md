# CabbageSet

This opcode set a widget property, i.e,`colour.fill`, `visible`, `opacity`, etc. It can run at init-time or k-time. The k-time variant must use a trigger to initiate the update. 

## Syntax

**cabbageSet** *SChannel*, *SProperty*, *iValue*
**cabbageSet** *SChannel*, *SProperty*, *SValue*
**cabbageSet** *kTrig*, *SChannel*, *SProperty*, *SValue*
**cabbageSet** *kTrig*, *SChannel*, *SProperty*, *kValue*


### Initialization
* *SChannel* – the name of the channel to query
* *SProperty* - the property you wish to access. If the property is part of a JSON object, such as `"bounds:{"left":0}` you can use dot notation, i.e., "bounds.left"
* *iValue* - the updated property value 

### Performance
* *kValue* - the updated property value 
* *SValue* - the updated property value 
* *kTrig* - when this is 1 the update will be sent to the UI element. You should avoid updating the UI on every cycle as a it is a needless waste of resources. 

## Example:

```cs
<Cabbage>[
    {"type":"form","caption":"Simple Instrument","size":{"width":1000,"height":520},"pluginId":"RMSy"},
    {"type":"rotarySlider", "channel":"gain", "bounds":{"left":150, "top":10, "width":100, "height":100}, "range":{"min":0, "max":2, "value":1, "skew":1, "increment":0.1}, "text":"Gain"},
]
</Cabbage>
<CsoundSynthesizer>
<CsOptions>
-dm0 -n -+rtmidi=NULL -M0 --midi-key=4 --midi-velocity=5
</CsOptions>
<CsInstruments>
; sr set by host
ksmps = 16
nchnls = 2
0dbfs = 1

instr 1 
    kSliderValue, kTrig cabbageGetValue "gain"
    //print value of 'gain' slider each time its updated
    printf "Value of %s widget is now %f", kTrig, kSliderValue
endin

</CsInstruments>  
<CsScore>
i1 0 z
</CsScore>
</CsoundSynthesizer>
```
