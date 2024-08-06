//https://leetcode.com/problems/fizz-buzz/
package lv2;

import java.util.ArrayList;
import java.util.List;

public class lv2 {

    //if else solution
    public List<String> fizzBuzz(int n) {
        List<String> result = new ArrayList<>();
        for(int i= 1; i<= n; i++){
            if(i%5 == 0 && i%3 ==0){
                result.add("FizzBuzz");
            }else if(i%3 ==0){
                result.add("Fizz");
            }else if(i%5 == 0){
                result.add("Buzz");
            }else{
                result.add(Integer.toString(i));
            }
        }
        return result;
    }

    //no %
    public List<String> fizzBuzz2(int n){
        List<String> result = new ArrayList<>();
        int i =1, fizz = 0, buzz =0;
        while(i<=n){
            fizz++; buzz++;
            if(fizz == 3 && buzz == 5){
                result.add("FizzBuzz");
                fizz = buzz = 0;
            }else if(fizz ==3){
                result.add("Fizz");
                fizz = 0;
            }else if(buzz == 5){
                result.add("Buzz");
                buzz = 0;
            }else{
                result.add(Integer.toString(i));
            }
            i++;

        }

        return result;
    }

    //ternary operator
    public List<String> fizzBuzz3(int n){
        List ans = new ArrayList<>();
        for(int i = 1; i<= n ;i++){
            ans.add(
                i%15 ==0 ? "FizzBuzz":
                i%5 == 0 ? "Buzz":
                i%3 == 0 ? "Fizz":
                String.valueOf(i)
            );
        }

        return ans;
    }

}
