const Producer = require('./Producer');

const topic = 'a_topic';

const producer = new Producer();

producer
  .init()
  .then(() => producer.createTopics([topic]))
  .then(() => producer.send(topic, ['I am a messasge']))
  .catch(console.error);
