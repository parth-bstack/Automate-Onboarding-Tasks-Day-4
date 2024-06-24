def is_vowel(input, position):
    if input[position] in 'aeiou':
        return True
    else:
        return False

def main():
    str = input("Enter a string: ").lower()
    len_input = len(str)

    for i in range(len_input):
        if is_vowel(str, i):
            print("Vowel is present")
            return

    print("No Vowel Found")

if __name__ == "__main__":
    main()
