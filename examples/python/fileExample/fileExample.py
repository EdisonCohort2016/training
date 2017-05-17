#!/usr/bin/python

# Open a file for writing
with open('output.txt', 'w') as f:
    for i in range(10):
        f.write(str(i) + '\n')

# File is now closed


# Open file for reading
with open('output.txt', 'r') as f:
    for line in f:
        print(line, end='')
