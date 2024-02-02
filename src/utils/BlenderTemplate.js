export default function blenderScript(formula, speed=1, scale=1, frames=10){
    
    return`
    import bpy
    import mathutils
    from math import *

    # get the object
    obj = bpy.data.objects["<Enter Your Object Name>"]
    loc = obj.location

    delta = 0
    i=0
    speed = ${speed}
    scale = ${scale}
    formula = "${formula.replace("x", "i")}"

    current_frame = 0
    frames=${frames}

    while i <= frames:
        # adjustment values
        (x,y,z) = (i,eval(formula),0)*scale
        obj.location = loc + mathutils.Vector((x,y,z))
        obj.keyframe_insert(data_path="location", frame=current_frame, index=-1)
        i+=1
        current_frame+=(10*speed)
    `
}