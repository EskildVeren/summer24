package com.example.taskmanager

import androidx.compose.runtime.toMutableStateList
import androidx.lifecycle.ViewModel

class TaskManagerViewModel: ViewModel() {
    private val _tasks = listOf<TaskItem>().toMutableStateList()

    val tasks: List<TaskItem>
        get() = _tasks

    fun removeTask(item: TaskItem) {
        _tasks.remove(item)
    }

    fun addTask(item: TaskItem) {
        _tasks.add(item)
    }

    fun setTaskChecked(item: TaskItem, status: Boolean) {
        item.checked = !status
        _tasks[_tasks.indexOf(item)] = item
        _tasks.add(TaskItem("RARRRRR"))
    }
}