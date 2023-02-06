#include <stdio.h>

int main(void) {
    printf("Howdy, Everyone\n");
    printf("This is my C program");
}

int main(void) {
 int age = 0;
 age = 37.2;
 printf("%u", age);
}

int main(void) {
    unsigned char j = 255;
    j = j + 10;
    printf("%u", j);
}

// floating point number
int main(void) {
    printf("char size: %lu bytes\n", sizeof(char));
    printf("int size: %lu bytes\n", sizeof(int));
    printf("short size: %lu bytes\n", sizeof(short));
    printf("long size: %lu bytes\n", sizeof(long));
    printf("float size: %lu bytes\n", sizeof(float));
    printf("double size: %lu bytes\n", sizeof(double));
    printf("long double size: %lu bytes\n", sizeof(long double));
}

// Constant
int main(void) {
const int Age = 15;
printf("%u", Age);
}

// Operators
// Arithimetic Operators
int main(void) {
int a = 2;
int b = 3;
int c = a + b;
printf("%u", c);
}

// if and else
int main(void) {
int a = 3;
if (a == 4) {
    printf("a is equal to 4");
} else {
    printf("a is not equal to 4");
}
}

int main(void) {
char a = 5;
if (a == 2) {
    printf("a is equal to 2");
} else if (a == 5) {
    printf("a is equal to 5");
} else {
    printf("a is an integral");
}
}


//loop
int main(void) {
for (int i = 0; i <= 10; i++) {
    /*instructions to be repeated*/
    printf("%u", i);
}
}

int main(void) {
for (int i = 30; i < 1000; i = i + 30) {
    /*instructions to be repeated*/
    printf("%u", i);
}
}

// While Loop
int main(void) {
int i = 0;
while (i < 200)
{
    i = i + 2;
    printf("%u", i);
}
}

int main(void) {
int i = 0;
while (i < 10)
{
    i++;
    printf("%u", i);
}
}




