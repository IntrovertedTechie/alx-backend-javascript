 print_triangle(triangle):
    for row in triangle:
       """" Print_triangle""" print("[{}]".format(",".join([str(x) for x in row])))

print_triangle(pascal_triangle(5))