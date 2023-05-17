export default function solution(content) {
  // BEGIN
  const data = content.trim().split('\n').slice(2)
    .map((line) => line.trim().split('|'));
  //console.log(data);
  // 1. Сколько всего растений содержится в файле?
  console.log(`1. Сколько всего растений содержится в файле?: ${data.length}`);

  // 2. Отсортируйте список растений в алфавитном порядке.
  // При этом все растения должны начинаться с большой буквы.
  const sortedPlants = data
    .map((line) => line[1])
    .map((plant) => `${plant.trim()[0].toUpperCase()}${plant.trim().slice(1)}`)
    .sort()
    //.join(',')

  console.log(`2. Cписок растений в алфавитном порядке: ${sortedPlants}`)

  // 3. Выведите количество опасных и безопасных для человека растений
  // в данной таблице в процентном соотношении.

  const danger = data.filter((line) => line[5].trim() === 'Да').length;
  const good = data.filter((line) => line[5].trim() === 'Нет').length;
  console.log(`3. Всего: ${data.length} Опасных: ${danger}: ${(danger / data.length) * 100}% Безопасных: ${good}: ${(good / data.length) * 100}%`);

  // 4. Выведите среднее время жизни всех лесных растений. Не каждого растения,
  // а всех растений вместе. То есть среднее арифметическое для всех лесных растений.
  const forestPlants = data.filter((line) => line[2].trim().split(',')[0] === 'Леса')
  //console.log(forestPlants);
  const lifeTime = forestPlants
    .map((plant) => plant[4].trim().split(' '))
    .map((el) => {
      if (el.includes('-')) {
        return Number(el[0].split('-')[0]) + Number(el[1].split('-')) / 2;
      } else {
        return Number(el[0].split('-')[0]);
      }
    })
    .reduce((acc, el) => acc + el)
  const averageLifeTime = lifeTime / forestPlants.length;
  console.log(`4. Среднее время жизни всех лесных растений: ${averageLifeTime}`);

  // 5. Определите какое место обитания больше всего свойственно опасным для человека растениям.
  const dangerPlaces = data
    .filter((line) => line[5].trim() === 'Да')
    .flatMap((places) => places[2].trim().split(','))
    .map((el) => el.trim()[0].toUpperCase() + el.trim().slice(1))
  const dangerCounter = {};
  dangerPlaces.forEach((val) => dangerCounter[val] = (dangerCounter[val] ?? 0) + 1)
  const keys = Object.keys(dangerCounter);
  const values = Object.values(dangerCounter);

  console.log(`5. Самое опасное место: ${keys[values.indexOf(Math.max(...values))]}`)

  // END
}