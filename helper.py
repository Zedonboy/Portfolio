import os
from string import Template
s = Template('import $var from "../images/$path"\n')
imgFiles = os.listdir("src/images")
outputFile = open("b.txt", 'x')
for image in imgFiles:
    name = image.split(".")[0]
    varList = name.split("-")
    varname = ""
    if len(varList) > 1:
        varList[1].capitalize
        varname = varList[0]+varList[1]
        pass
    else:
        varname = varList[0]
        pass
    cnt = s.substitute(var = varname, path = image)
    outputFile.write(cnt)
    pass

outputFile.flush()
outputFile.close()