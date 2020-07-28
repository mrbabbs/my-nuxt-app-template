<template functional>
  <li>
    <input
      id="props.id"
      type="checkbox"
      name=""
      :checked="props.completed"
      @click="listeners['toggle']()"
    />
    <span>
      <slot />
    </span>
    <div>
      <span>{{ props.createdDate }}</span>
      <span>{{ props.completedDate }}</span>
    </div>
  </li>
</template>
