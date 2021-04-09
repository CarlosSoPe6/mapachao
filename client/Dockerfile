# Use a light node.js v14.16.1
FROM node:14.16.1-alpine3.13

# Set the working directory to /client
WORKDIR /client

# copy package.json into the container at /client
COPY package*.json /client/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /client
COPY . /client/

# Make port 8080 available to the world outside this containerE
EXPOSE 8080

# Run the app when the container launches
CMD ["npm", "start"]