var rotate = function(matrix) {
    const transpose = (matrix) => {
        let l = matrix.length;
        for (let i = 0; i < l; i++) {
            for (let j = i+1; j<l; j++) {
                let temp = matrix[i][j]
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp; 
            }
        }
        console.log(matrix);
    }
    const reflect = (matrix) => {
        let l = matrix.length;
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < Math.floor(l/2); j++) {
                let temp = matrix[i][j]
                matrix[i][j] = matrix[i][l-j-1];
                matrix[i][l-j-1] = temp;
            }
        }
        console.log(matrix);
    }
    transpose(matrix);
    reflect(matrix);
    return matrix;
};
