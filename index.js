export default function solution(content) {
  // BEGIN
  const data = content.trim().split('\n').slice(2)
    .map((line) => line.trim().split('|'));

  //console.log(data);
  // 1. Сколько всего растений содержится в файле?
  console.log(`1. Сколько всего растений содержится в файле?: ${data.length}`);

  // 2. Отсортируйте список растений в алфавитном порядке. При этом все растения должны начинаться с большой буквы.
  const sortedPlants = data
    .map((line) => line[1])
    .map((plant) => `${plant.trim()[0].toUpperCase()}${plant.trim().slice(2)}`)
    .sort()
    //.join(',')

  console.log(`2. Cписок растений в алфавитном порядке: ${sortedPlants}`)

  // 3. Выведите количество опасных и безопасных для человека растений в данной таблице в процентном соотношении.

  const danger = data.filter((line) => line[5].trim() === 'Да').length;
  const good = data.filter((line) => line[5].trim() === 'Нет').length;
  console.log(`3. Всего: ${data.length} Опасных: ${danger}: ${(danger / data.length) * 100}% Безопасных: ${good}: ${(good / data.length) * 100}%`);

  // 4. Выведите среднее время жизни всех лесных растений. Не каждого растения, а всех растений вместе.
  // То есть среднее арифметическое для всех лесных растений.
  const forestPlants = data.filter((line) => line[2].trim().split(',')[0] === 'Леса')
  console.log(forestPlants);
  const lifeTime = forestPlants.map((plant) => plant[4].trim().split(' '))
    .map((el) => el[0].split('-'))
  console.log(lifeTime)
  
  // END




}