
var MyHashMap = function() {
    this.hashMap = {};
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    // console.log('putting' + value + 'at' + key);
    this.hashMap[key]=value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    // console.log('getting' + key)
    // return this.hashMap.key;
    return this.hashMap[key] === undefined ? -1 : this.hashMap[key]
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.hashMap[key]
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// class MyHashMap{
//     constructor(){
//         //create a new array
//         this.map = new Array(1001).fill(-1);
//         for (let i = 0; i < this.map.length; i++){ 
//             this.map[i] = null;
//         }
//     }
//     put(key, value){
//         let k = key % 1000;

//         if (this.map[k] == null){
//             this.map[k] = new Array(1001).fill(-1);
//         }
//         this.map[k][parseInt(key/1000)] = value;
//     }
//     get(key){
//         let k = key % 1000;
//         if (this.map[k] != null){
//             return this.map[k][parseInt(key/1000)];
//         }
//         return -1;
//     }
//     remove(key){
//         let k = key% 1000;
//         if (this.map[k] != null){
//             this.map[k][parseInt(key/1000)] = -1;
//         }
//     }
// }
