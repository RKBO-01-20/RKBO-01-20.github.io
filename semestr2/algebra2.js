function matMulti(A, B){
    if (A[0].length != B.length){
        throw "Матрицы не совместимы!"
    }
    var C = [];
    m = A[0].length
    
    for(ci = 0; ci < A.length; ci++){
        C[ci] = []
        for(cj = 0; cj < B[0].length; cj++){
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

    d = 0
    for (i = 0; i < A.length; i++){
        d += (-1)^i * A[0][i] * det(M(0, i, A))
    }
    return d    
}

function M(ik, jk, A){
    m = []
    a = 0
    b = 0
    for(i = 0; i< A.length; i++){
        b = 0
        if (i == ik){
            a = -1
            continue
        }
        m[(i+a)] = []
        for(j = 0; j < A.length; j++){
            if(j == jk){
                b = -1
                continue
            }
            m[(i+a)][(j+b)] = A[i][j] 
        }
    }
    return m
}