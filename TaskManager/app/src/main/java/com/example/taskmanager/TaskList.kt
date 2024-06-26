package com.example.taskmanager

import androidx.compose.animation.core.RepeatMode
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.text.ClickableText
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp

@Composable
fun TaskManagerScreen(
    modifier: Modifier = Modifier,
    taskManagerViewModel: TaskManagerViewModel = TaskManagerViewModel()
) {
    Column(modifier = modifier.padding(24.dp)) {
        TaskList(
            tasks = taskManagerViewModel.tasks,
            { task -> taskManagerViewModel.removeTask(task) },
            { task, status -> taskManagerViewModel.setTaskChecked(task, status) },
            modifier
        )
        TaskInput(addTask = { newTask -> taskManagerViewModel.addTask((newTask)) })
    }
}

@Composable
fun TaskInput(addTask: (TaskItem) -> Unit) {
    var newTask by remember { mutableStateOf("") }
    Row {
        TextField(
            value = newTask,
            onValueChange = { newTask = it },
            label = { Text("Write your next task") }
        )

        IconButton(
            onClick = {
                addTask(TaskItem(newTask))
                newTask = ""
            },
            enabled = newTask != ""
        ) {
            Icon(Icons.Filled.Add, contentDescription = "Add")
        }
    }
}

@Composable
fun TaskList(
    tasks: List<TaskItem>,
    removeTask: (TaskItem) -> Unit,
    setTaskChecked: (TaskItem, Boolean) -> Unit,
    modifier: Modifier = Modifier
) {
    var editedTask: TaskItem? by remember { mutableStateOf(null) }

    LazyColumn {
        items(
            items = tasks
        ) { task ->
            if (task != editedTask) {
                TaskListItem(
                    task = task,
                    removeItem = { removeTask(task) },
                    setEditedTask = { editedTask = task },
                    setCheckedStatus = { status -> setTaskChecked(task, status); println(task.checked) },
                    modifier = modifier
                )
            } else {
                var editTaskText: String by remember { mutableStateOf(task.name) }
                Row {
                    TextField(
                        value = editTaskText,
                        onValueChange = { editTaskText = it },
                        label = { Text("Write your next task") }
                    )
                    IconButton(onClick = {
                        task.name = editTaskText
                        editedTask = null
                    }) {
                        Icon(Icons.Filled.Check, contentDescription = "ConfirmEdit")
                    }
                }
            }
        }
    }
}

@Composable
fun TaskListItem(
    task: TaskItem,
    removeItem: () -> Unit,
    setEditedTask: () -> Unit,
    setCheckedStatus: (Boolean) -> Unit,
    modifier: Modifier = Modifier,
) {
    Row(
        modifier = modifier, verticalAlignment = Alignment.CenterVertically
    ) {
        var checked by remember { mutableStateOf(false) }
        if (checked) {
            ClickableText(
                text = AnnotatedString(text = task.name),
                onClick = { checked = false },
                modifier = Modifier
                    .weight(1f)
                    .padding(start = 16.dp),
                style = TextStyle(textDecoration = TextDecoration.LineThrough)
            )
        } else {
            ClickableText(
                text = AnnotatedString(text = task.name),
                onClick = { checked = true },
                modifier = Modifier
                    .weight(1f)
                    .padding(start = 16.dp),
            )
        }

        IconButton(onClick = removeItem) {
            Icon(Icons.Filled.Close, contentDescription = "Close")
        }
        IconButton(onClick = setEditedTask) {
            Icon(Icons.Filled.Edit, contentDescription = "EditTask")
        }
    }
}