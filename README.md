# BareBonesButtonApp

This is a simple front end to backend web application written in node.js.  Shouts outs to @ChatGPT for assisting me in creating the index.html file, and the apps.js file.

This was to help me visually see what a web application looks like.  I will be building off of this.  Stay TUNED!

Node.js Counter with MySQL
This is a simple Node.js application that provides a button to increment a counter value. Each time the button is clicked, the value is increased by 1 and stored in a MySQL database. The application and the database are both containerized using Docker.

Prerequisites
Docker
Node.js (Optional, for local development)
Project structure
lua
Copy code
my-node-app/
|-- Dockerfile
|-- app.js
|-- package-lock.json
|-- package.json
|-- public/
    |-- index.html
Getting started
Clone the repository
bash
Copy code
git clone https://github.com/yourusername/my-node-app.git
cd my-node-app
Build the Docker image
perl
Copy code
docker build -t my-node-app .
Start the MySQL container
arduino
Copy code
docker run --name mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=mydatabase -d mysql:5.7
Start the Node.js container and link it to the MySQL container
perl
Copy code
docker run --name my-node-app --link mysql:mysql -p 3000:3000 -d my-node-app
Access the application
Open your browser and navigate to http://localhost:3000. You should see a button that increments the value, and the updated value is stored in the MySQL database.

View the value in the database
To see the value in the database, connect to the MySQL container and query the counter table:

bash
Copy code
docker exec -it mysql mysql -uroot -ppassword mydatabase
In the MySQL shell, run the following SQL query:

sql
Copy code
SELECT * FROM counter;
Local development (optional)
To run the application locally, follow these steps:

Install the required packages:
Copy code
npm install
Start the application:
Copy code
node app.js
The application will be accessible at http://localhost:3000.

Contributing
Please feel free to submit issues or pull requests with any improvements or bug fixes.

License
