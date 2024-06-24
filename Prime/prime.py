def check_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def main():
    num = int(input("Enter a number: "))
    if check_prime(num):
        print(f"{num} is a prime number.")
    else:
        print(f"{num} is not a prime number.")

if __name__ == "__main__":
    main()
