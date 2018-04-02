const distance = (target,el) => {
 return Math.sqrt(Math.pow(target.x - el.x, 2) + Math.pow(target.y - el.y, 2))
}

export default {distance};
