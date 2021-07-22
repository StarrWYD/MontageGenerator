import os, json
f = open('C:\\Users\\kings\\Desktop\\at\\object.js', 'r', encoding='utf-8')
x = f.read()
s = x
s = s.split('\nwindow')[0]
s = s.split('const object =')[1]
s = json.loads(s)
url = input('What is the video url?\n')
name = input('What is the video name?\n')
y = ',\n\t"video' + str(len(s) + 1) + '": [\n\t\t{\n\t\t\t\"url\": \"' + url + '\",\n\t\t\t\"title\": \"' + name + '\"\n\t\t}\n\t]'
strlist = x.split('\n}\nwindow.object')
strlist0 = strlist[0]
finalstr = strlist0 + y + '\n}\nwindow.object'
f.close()
f = open('C:\\Users\\kings\\Desktop\\at\\object.js', 'w', encoding='utf-8')
f.truncate(0)
f.write(finalstr)
f.close()