package Vowels;
import java.util.*;

class vowels {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine().toLowerCase();
        int len = input.length();

        for (int i = 0; i < len; i++) {
            if(isVowel(input,i)){
                System.out.println("Vowel is present");
                return;
            }
        }
        System.out.println("No Vowel Found");
    }

    static boolean isVowel(String input, int position) {
        if(input.charAt(position) == 'a' || input.charAt(position) == 'e' || input.charAt(position) == 'i' || input.charAt(position) == 'o' || input.charAt(position) == 'u' ){
            return true;
        }
        else{
            return false;
        }
    }   
}