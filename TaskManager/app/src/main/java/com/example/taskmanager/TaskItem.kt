package com.example.taskmanager

class TaskItem(var name: String) {
    var checked = false

    fun setCheckedStatus(checked: Boolean) {
        this.checked = !checked
    }

    fun changeName(name: String) {
        this.name = name
    }
}