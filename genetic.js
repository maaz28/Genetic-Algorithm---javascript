const initial_population = 25;
const children_count = 10; // 20 in total
const gene_count = 3;
let initial_population_array = [];
const fitness_function = (x, y, z) => {
   return (Math.pow(x, 2) - 2*x*y*Math.pow(z, 2) + 2*Math.pow(y, 2)*z - 5.7 *x*y*z + Math.pow(z, 2));   
}

function random_number_for_x(){
    var random = Math.round(Math.random()*4) - 2;
    return random;
}

function random_number_for_y(){
    var random = Math.round(Math.random()*4) - 1;
    return random;
}

function random_number_for_z(){
    var random = Math.round(Math.random()*3);
    return random;
}

function random_number_for_crossover(){
    var random = Math.round(Math.random()*24);
    return random;
}

const population = () => { // calculate initial population
    let array = [];
    for(let i=0; i<initial_population; i++){
        array[i] = [];
        for(let j=0; j<gene_count; j++){
            switch(j) {
                case 0: //x
                array[i][j] = random_number_for_x();
                break;
                case 1: //y
                array[i][j] = random_number_for_y();
                break;
                case 2: //z
                array[i][j] = random_number_for_z();
                break; 
            }
        }
    }
    return(array)
}

const crossover = (array) => {
    let children_array = []
    for(let i=0; i<children_count; i++){
        let chromosome1 = random_number_for_crossover();
        let chromosome2 = random_number_for_crossover();
        console.log(chromosome1, chromosome2);
        if(array[chromosome1][]){

        }
    }
    return(array)
}

initial_population_array = population();
console.log(crossover(initial_population_array))