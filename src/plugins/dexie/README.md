# Dexie.js 方法详细说明

## 查询方法

### 范围查询
- **above(key)**: 查找大于指定键值的所有记录
  ```js
  db.friends.where('age').above(25).toArray()
  ```

- **aboveOrEqual(key)**: 查找大于等于指定键值的所有记录
  ```js
  db.friends.where('age').aboveOrEqual(25).toArray()
  ```

- **below(key)**: 查找小于指定键值的所有记录
  ```js
  db.friends.where('age').below(25).toArray()
  ```

- **belowOrEqual(key)**: 查找小于等于指定键值的所有记录
  ```js
  db.friends.where('age').belowOrEqual(25).toArray()
  ```

- **between(lower, upper, includeLower?, includeUpper?)**: 查找在指定范围内的记录
  ```js
  // 查找年龄在 18-30 之间的朋友（包含边界值）
  db.friends.where('age').between(18, 30).toArray()
  ```

### 相等性查询

- **equals(key)**: 查找与指定值完全相等的记录
  ```js
  db.friends.where('name').equals('John').toArray()
  ```

- **equalsIgnoreCase(key)**: 查找与指定字符串相等（忽略大小写）的记录
  ```js
  db.friends.where('name').equalsIgnoreCase('john').toArray()
  ```

- **notEqual(key)**: 查找不等于指定值的记录
  ```js
  db.friends.where('name').notEqual('John').toArray()
  ```

### 集合操作

- **anyOf(keys[])**: 查找匹配数组中任意值的记录
  ```js
  db.friends.where('age').anyOf([25, 30, 35]).toArray()
  ```

- **anyOfIgnoreCase(keys: string[])**: 查找匹配字符串数组中任意值的记录（忽略大小写）
  ```js
  db.friends.where('name').anyOfIgnoreCase(['john', 'jane']).toArray()
  ```

- **noneOf(keys: Array)**: 查找不匹配数组中任何值的记录
  ```js
  db.friends.where('age').noneOf([25, 30, 35]).toArray()
  ```

### 字符串查询

- **startsWith(key: string)**: 查找以指定字符串开头的记录
  ```js
  db.friends.where('name').startsWith('Jo').toArray()
  ```

- **startsWithAnyOf(prefixes: string[])**: 查找以数组中任意字符串开头的记录
  ```js
  db.friends.where('name').startsWithAnyOf(['Jo', 'Ma']).toArray()
  ```

- **startsWithAnyOfIgnoreCase(prefixes: string[])**: 同上，但忽略大小写
  ```js
  db.friends.where('name').startsWithAnyOfIgnoreCase(['jo', 'ma']).toArray()
  ```

- **startsWithIgnoreCase(key: string)**: 查找以指定字符串开头的记录（忽略大小写）
  ```js
  db.friends.where('name').startsWithIgnoreCase('jo').toArray()
  ```

## 数据操作方法

### 添加数据

- **add(item, key?)**: 添加单条记录
  ```js
  db.friends.add({name: 'John', age: 25})
  ```

- **bulkAdd(items: Array)**: 批量添加记录
  ```js
  db.friends.bulkAdd([
    {name: 'John', age: 25},
    {name: 'Jane', age: 24}
  ])
  ```

### 更新数据

- **put(item: T, key?: Key)**: 添加或更新记录
  ```js
  db.friends.put({id: 1, name: 'John', age: 26})
  ```

- **bulkPut(items: Array)**: 批量添加或更新记录
  ```js
  db.friends.bulkPut([
    {id: 1, name: 'John', age: 26},
    {id: 2, name: 'Jane', age: 25}
  ])
  ```

- **update(key: Key, changes)**: 更新指定键的记录
  ```js
  db.friends.update(1, {age: 26})
  ```

- **modify(changes)**: 修改记录
  ```js
  // 使用回调函数修改
  db.friends.where('age').below(25).modify(friend => {
    friend.young = true;
  });

  // 使用对象修改
  db.friends.where('age').below(25).modify({
    young: true
  });
  ```

### 删除数据

- **delete(key)**: 删除单条记录
  ```js
  db.friends.delete(1)
  ```

- **bulkDelete(keys: Array)**: 批量删除记录
  ```js
  db.friends.bulkDelete([1, 2, 3])
  ```

- **clear()**: 清空表中所有记录
  ```js
  db.friends.clear()
  ```

## 查询结果处理

### 结果获取

- **toArray()**: 将查询结果转换为数组
  ```js
  const friends = await db.friends.toArray()
  ```

- **first()**: 获取第一条记录
  ```js
  const firstFriend = await db.friends.first()
  ```

- **last()**: 获取最后一条记录
  ```js
  const lastFriend = await db.friends.last()
  ```

### 结果遍历

- **each(callback)**: 遍历每条记录
  ```js
  await db.friends.each(friend => {
    console.log(friend.name);
  })
  ```

- **eachKey(callback)**: 遍历每条记录的键
  ```js
  await db.friends.eachKey(key => {
    console.log(key);
  })
  ```

- **eachPrimaryKey(callback)**: 遍历每条记录的主键
  ```js
  await db.friends.eachPrimaryKey(key => {
    console.log(key);
  })
  ```

### 结果过滤和排序

- **filter(fn)**: 过滤记录
  ```js
  db.friends.filter(friend => friend.age > 25).toArray()
  ```

- **and(filter)**: 添加额外的过滤条件
  ```js
  db.friends
    .where('age').above(25)
    .and(friend => friend.name.startsWith('J'))
    .toArray()
  ```

- **or(indexOrPrimayKey)**: 添加或条件
  ```js
  db.friends
    .where('age').above(25)
    .or('name')
    .startsWith('J')
    .toArray()
  ```

- **distinct()**: 获取不重复的记录
  ```js
  db.friends.distinct().toArray()
  ```

- **orderBy(index)**: 按指定索引排序
  ```js
  db.friends.orderBy('age').toArray()
  ```

### 分页处理

- **offset(n)**: 跳过前 n 条记录
  ```js
  db.friends.offset(10).toArray()
  ```

- **limit(n)**: 限制返回记录数量
  ```js
  db.friends.limit(10).toArray()
  ```

- **reverse()**: 反转查询结果顺序
  ```js
  db.friends.orderBy('age').reverse().toArray()
  ```

## 键操作

- **keys()**: 获取所有键
  ```js
  const keys = await db.friends.keys()
  ```

- **primaryKeys()**: 获取所有主键
  ```js
  const primaryKeys = await db.friends.primaryKeys()
  ```

- **uniqueKeys()**: 获取所有不重复的键
  ```js
  const uniqueKeys = await db.friends.uniqueKeys()
  ```

## 其他操作

- **count()**: 获取记录数量
  ```js
  const count = await db.friends.count()
  ```

- **toCollection()**: 将查询转换为集合
  ```js
  const collection = db.friends.toCollection()
  ```

## 注意事项

1. 所有返回 Promise 的方法都应该使用 async/await 或 .then() 处理
2. 批量操作（bulk*）方法比单条操作更高效
3. 使用索引可以提高查询性能
4. 复杂查询建议使用 compound indexes（复合索引）
5. 大量数据操作时考虑使用事务（transaction）
