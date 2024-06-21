package com.example.watercounter

import androidx.compose.runtime.toMutableStateList

class WellnessViewModel {
    private val _tasks = getWellnessTasks().toMutableStateList()
    val tasks: List<WellnessTask>
        get() = _tasks

    fun remove(item: WellnessTask) {
        _tasks.remove(item)
    }

    fun changeTaskChecked(item: WellnessTask, checked: Boolean) {
        _tasks.find { it.id == item.id }?.let {task ->
            task.checked = checked
        }
    }
}

private fun getWellnessTasks() = List(30) { i -> WellnessTask(i, "Task #$i")}