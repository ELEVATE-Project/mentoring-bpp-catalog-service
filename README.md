<div align="center">

# Mentoring BPP Catalog Service

<a href="https://shikshalokam.org/elevate/">
<img
    src="https://shikshalokam.org/wp-content/uploads/2021/06/elevate-logo.png"
    height="140"
    width="300"
  />
</a>

</br>
The Mentoring building block enables effective mentoring interactions between mentors and mentees. The capability aims to create a transparent eco-system to learn, connect, solve, and share within communities.MentorED is an open source mentoring application that facilitates peer learning and professional development by creating a community of mentors and mentees.

</div>

# Setup Options

Mentoring BPP Catalog service can be setup in local using two methods:

<details><summary>Dockerized service with local dependencies(Intermediate)</summary>

## A. Dockerized Service With Local Dependencies

**Expectation**: Run single docker containerized service with existing local (in host) or remote dependencies.

-   Clone the **Mentoring BPP Catalog service** repository.

    ```
    git clone https://github.com/ELEVATE-Project/mentoring-bpp-catalog-service.git
    ```

### Local Dependencies Steps

1. Update dependency (Kafka, Elastic Search etc) IP addresses in .env with "**host.docker.internal**".

    Eg:

    ```properties
     #Elastic Search Server URL
     ELASTIC_NODE = host.docker.internal:9200

     #Kafka Host Server URL
     KAFKA_URL = host.docker.external:9092
    ```

2. Build the docker image.
    ```console
    /ELEVATE/mentoring-bpp-catalog-service$ docker build -t elevate/bpp-catalog:1.0 .
    ```
3. Run the docker container.

    - For Mac & Windows with docker v18.03+:

        ```console
        $ docker run --name bpp-catalog elevate/bpp-catalog:1.0
        ```

    - For Linux:
        ```console
        $ docker run --name bpp-catalog --add-host=host.docker.internal:host-gateway elevate/bpp-catalog:1.0`
        ```
        Refer [this](https://stackoverflow.com/a/24326540) for more information.

### Remote Dependencies Steps

1.  Update dependency (Mongo, Kafka etc) Ip addresses in .env with respective remote server IPs.

    Eg:

    ```properties
     #Elastic Search Server URL
     ELASTIC_NODE = 10.1.2.34:9200

     #Kafka Host Server URL
     KAFKA_URL = 11.2.3.45:9092
    ```

2.  Build the docker image.
    ```console
    /ELEVATE/mentoring-bpp-catalog-service$ docker build -t elevate/bpp-catalog:1.0 .
    ```
3.  Run the docker container.

    ```console
    $ docker run --name bpp-catalog elevate/bpp-catalog:1.0 .
    ```

</details>

<details><summary>Local Service with local dependencies(Hardest)</summary>

## B. Local Service With Local Dependencies

**Expectation**: Run a single service with existing local dependencies in the host (**Non-Docker Implementation**).

### Steps

1.  Install required tools & dependencies

    Install any IDE (eg: VScode)

    Install Nodejs: https://nodejs.org/en/download/

    Install Kafka: https://kafka.apache.org/quickstart

    Install Elasticsearch: ​​ https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html

2.  Clone the **Mentoring BPP Catalog service** repository.

    ```
    git clone https://github.com/ELEVATE-Project/mentoring-bpp-catalog-service.git
    ```

3.  Add **.env** file to the project directory

    Create a **.env** file in **src** directory of the project and copy these environment variables into it.

    ```
    APPLICATION_PORT=3009
    NODE_ENV=development
    KAFKA_CLIENT_ID='MENTORING_BPP_CATALOG'
    KAFKA_BROKERS='kafka:9092'
    KAFKA_SESSION_TOPIC='session'
    KAFKA_SESSION_ELASTIC_TOPIC='mentoring-sessions'
    KAFKA_PROVIDER_ELASTIC_TOPIC='mentoring-providers'
    KAFKA_FULFILLMENT_ELASTIC_TOPIC='mentoring-fulfillments'
    KAFKA_AGENT_ELASTIC_TOPIC='mentoring-agents'

    ELASTIC_SESSION_INDEX='mentoring-sessions'
    ELASTIC_PROVIDER_INDEX='mentoring-providers'
    ELASTIC_FULFILLMENT_INDEX='mentoring-fulfillments'
    ELASTIC_AGENT_INDEX='mentoring-agents'
    ROOT_ROUTE='/bpp-catalog'

    ELASTIC_NODE='http://elasticsearch:9200'
    KAFKA_CONNECT_URI='http://localhost:8083'

    KAFKA_CONNECT_SESSION_CONNECTOR='mentoring-sessions'
    KAFKA_CONNECT_PROVIDER_CONNECTOR='mentoring-providers'
    KAFKA_CONNECT_FULFILLMENT_CONNECTOR='mentoring-fulfillments'
    KAFKA_CONNECT_AGENT_CONNECTOR='mentoring-agents'

    ```

4.  Install Npm packages

    ```console
    ELEVATE/mentoring-bpp-catalog-service/src$ npm install
    ```

5.  Start Mentoring server

    ```console
    ELEVATE/mentoring-bpp-catalog-service/src$ npm start
    ```

6.  To run the scripts

    Run the **schedulerScript** file from the scripts directory:

    ```
    ELEVATE/mentoring-bpp-catalog-service/src/scripts/kafkaConnectorConfigs$ node createAgentConnector.js  && node createFulfillmentConnector.js && node createProviderConnector.js && node createSessionConnector.js
    ```

</details>

</br>

# Tech stack

-   Node - 16.0.0
-   Kafka - 7.3.0
-   Jest - 28.1.1
-   Elasticsearch - 8.5.2

# Scripts

To run the scripts

```
ELEVATE/mentoring-bpp-catalog-service/src/scripts/kafkaConnectorConfigs$ node createAgentConnector.js  && node createFulfillmentConnector.js && node createProviderConnector.js && node createSessionConnector.js
```

# Team

<a href="https://github.com/ELEVATE-Project/mentoring-bpp-catalog-service/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ELEVATE-Project/mentoring-bpp-catalog-service" />
</a>

# Open Source Dependencies

Several open source dependencies that have aided Mentoring's development:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![ElasticSearch](https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch)
