/*
  Given an array of bird sightings where every element represents a bird type id,
  determine the id of the most frequently sighted type. 
  If more than 1 type has been spotted that maximum amount,
  return the smallest of their ids.
  
  ex: 
  arr = [1,1,2,2,3]
  pick the lower of the value seen the most times (1)
  
*/

function migratoryBirds(arr) {
    
    let sortedTallies = [0, 0, 0, 0, 0];
    let birdType = 0;
    let birdCount = 0;

    
    for(let i = 0; i<arr.length; i++) {
        sortedTallies[arr[i]-1] += 1;
    }
    for(let j = 0; j<sortedTallies.length; j++){
        if (birdCount < sortedTallies[j]){
            birdType = j;
            birdCount = sortedTallies[j];
        }
    }
    return birdType + 1;
}
