import requests
import re
from bs4 import BeautifulSoup

responce = requests.get("https://tools.keycdn.com/geo")
# responce.text
soup = BeautifulSoup(responce.text,'html.parser')
coordinates = soup.findAll('dd')[5].text

lat = re.findall('[0-9]+\.[0-9]+',coordinates)[0]
lon = re.findall('[0-9]+\.[0-9]+',coordinates)[1]

# with open('coordinates.txt','w') as f:
#         f.writelines(lat+"\n")
#         f.writelines(lon)
print(lat)
print(lon)
