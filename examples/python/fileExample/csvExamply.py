#!/usr/bin/python

import csv

d = raw_input('date: ')
event = raw_input('event: ')

# writes
with open('mycsvfile.csv', 'a') as csvfile:
    writer = csv.writer(csvfile, delimiter=',')
    writer.writerow([d, event])

# prints contents of csvfile
with open('mycsvfile.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        print(row)
