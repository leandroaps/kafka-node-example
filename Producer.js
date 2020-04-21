const kafka = require('kafka-node');
const client = new kafka.KafkaClient('localhost:2181');

class Producer {
  init() {
    this.producer = new kafka.HighLevelProducer(client);
    return new Promise((resolve, reject) => {
      this.producer.on('ready', () => resolve('ready'));
      this.producer.on('error', (err) => reject(err));
    });
  }

  createTopics(topics, async = true) {
    return new Promise((resolve, reject) => {
      this.producer.createTopics(topics, true, (error, data) => {
        if (error) return reject(error);
        return resolve(data);
      });
    });
  }

  send(topic, messages) {
    return new Promise((resolve, reject) => {
      this.producer.send([{ topic, messages: [messages] }], (error, data) => {
        if (error) return reject(error);
        return resolve(data);
      });
    });
  }
}

module.exports = Producer;
