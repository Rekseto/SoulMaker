const inRange = (x,y,targetX, targetY, triggerRangeX,triggerRangeY) => {
  if(targetX >= x - triggerRangeX && targetX <= x + triggerRangeX) {
    if(targetY >= y - triggerRangeY && targetY <= y + triggerRangeY) {
      return true;
    }
  }

  return false;
}


export default {inRange};
