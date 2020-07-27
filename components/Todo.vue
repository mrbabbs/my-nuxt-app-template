<template functional>
  <li>
    <input id="" type="checkbox" name="" :checked="props.completed" />
    <span>
      <slot />
    </span>
    <div>
      <span>{{ props.createdDate }}</span>
      <span>{{ props.completedDate }}</span>
    </div>
  </li>
</template>
