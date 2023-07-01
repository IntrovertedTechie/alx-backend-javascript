 print_triangle(triangle):
    for row in triangle:

 print("[{}]".format(",".join([(x) for x in row])))

print_triangle(pascal_triangle(5))