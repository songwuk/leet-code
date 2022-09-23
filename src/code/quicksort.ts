/**
 * 
 * @param {Array<number>}arr 
 * 
 */
export function quicksort<T extends Array<number>>(arr: T): any {
  if(arr.length <= 1){
    return arr
  }
  const medianNumber:number = Math.floor(arr.length/2)
  const pivot = arr.splice(medianNumber,1)[0]
  let left:Array<number> = [];
  let right:Array<number> = [];
  for(var i = 0; i < arr.length; ++i){
      if(arr[i] < pivot){
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
  }
  return quicksort(left).concat([pivot], quicksort(right))
}
