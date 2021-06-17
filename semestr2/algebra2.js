function matMulti(A, B){
    if (A[0].length != B.length){
        throw "Матрицы не совместимы!"
    }
    var C = [];
    var m = A[0].length
    
    for(var ci = 0; ci < A.length; ci++){
        C[ci] = []
        for(var cj = 0; cj < B[0].length; cj++){
            C[ci][cj] = 0
            for(p = 0; p < m; p++){
                C[ci][cj] += A[ci][p]*B[p][cj]
            }
        }
    }
    return C
}

function det(A){
    if (A.length != A[0].length){
        throw "Матрица не квадратная!"
    }else if(A.length < 1){
        throw "Матрица не должна быть пустой!"
    }

    switch (A.length){
        case 1:
            return A[0][0]
        case 2:
            return A[0][0]*A[1][1] - A[0][1]*A[1][0]
        case 3:
            return A[0][0]*A[1][1]*A[2][2] + A[0][1]*A[1][2]*A[2][0] + A[0][2]*A[1][0]*A[2][1] - A[0][2]*A[1][1]*A[2][0] - A[0][0]*A[1][2]*A[2][1] - A[0][1]*A[1][0]*A[2][2]
    }

    var d = 0
    for (var i = 0; i < A.length; i++){
        d += (-1)^i * A[0][i] * det(M(0, i, A))
    }
    return d    
}

function M(ik, jk, A){
    var m = []
    var a = 0
    var b = 0
    for(var i = 0; i< A.length; i++){
        b = 0
        if (i == ik){
            a = -1
            continue
        }
        m[(i+a)] = []
        for(var j = 0; j < A.length; j++){
            if(j == jk){
                b = -1
                continue
            }
            m[(i+a)][(j+b)] = A[i][j] 
        }
    }
    return m
}

function algDop(A){
    var B = []
    for(var i = 0; i<A.length; i++){
        B[i] = []
        for(var j = 0; j < A[0].length; j++){
            (det(M(i, j, A)))
            B[i][j] = Math.pow(-1, i+j) * det(M(i, j, A))
        }
    }
    return B
}

function trans(A){
    var B = []
    for(var k = 0; k<A[0].length; k++){
        B[k] = []
    }
    for(var i = 0; i<A.length; i++){
        for(var j = 0; j < A[0].length; j++){
            B[j][i] = A[i][j]
        }
    }
    return B
}