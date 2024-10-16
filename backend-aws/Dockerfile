# ใช้ image ของ Node.js รุ่นที่เหมาะสม
FROM node:16-alpine

# กำหนด working directory ภายใน container
WORKDIR /usr/src/app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package.json ./
COPY package-lock.json ./ 
# ติดตั้ง dependencies
RUN npm install 

# เปิดพอร์ต (ให้ตรงกับที่แอปพลิเคชันใช้)
EXPOSE 3000

CMD ["npm", "run", "start:dev"]
