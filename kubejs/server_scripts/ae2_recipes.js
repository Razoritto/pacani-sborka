ServerEvents.recipes(event => {
  const netherQuartz = Item.of('minecraft:quartz');
  const redstone = Item.of('minecraft:redstone');
  const chargedCertus = Item.of('ae2:charged_certus_quartz_crystal');
  
  if (!netherQuartz.isEmpty() && !redstone.isEmpty() && !chargedCertus.isEmpty()) {
    // Изменено: результат теперь 2 fluix_crystal
    event.shapeless(
      Item.of('ae2:fluix_crystal', 2), // Указываем количество через Item.of
      [ netherQuartz, redstone, chargedCertus ]
    ).id('kubejs:ae2/fluix_crystal_cheat');
    console.log('[KubeJS] Рецепт Fluix Crystal (x2) добавлен');
  } else {
    console.error('[KubeJS] Ошибка: Проверьте ID предметов!');
  }
  
  // Рецепт зарядки без изменений
  const certus = Item.of('ae2:certus_quartz_crystal');
  if (!certus.isEmpty()) {
    event.custom({
      type: 'ae2:charger',
      ingredient: { item: 'ae2:certus_quartz_crystal' },
      result: { item: 'ae2:charged_certus_quartz_crystal' }
    }).id('kubejs:ae2/charge_certus');
  }
});