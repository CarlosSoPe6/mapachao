# Use a light node.js v14.16.1
FROM node:14.16.1-alpine3.13

# Set the working directory to /api
WORKDIR /app

# copy package.json into the container at /api
COPY package*.json /app/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /api
COPY . /app/

# Make port 5000 available to the world outside this container
EXPOSE 80

# Run the app when the container launches
CMD ["npm", "start"]