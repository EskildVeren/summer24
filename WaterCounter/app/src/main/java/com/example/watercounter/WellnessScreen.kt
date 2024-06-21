package com.example.watercounter

import androidx.compose.foundation.layout.Column
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.runtime.toMutableStateList
import androidx.compose.ui.Modifier
import androidx.lifecycle.viewmodel.compose.viewModel


@Composable
fun WellnessScreen(
    modifier: Modifier = Modifier,
    wellnessViewModel: WellnessViewModel = WellnessViewModel()
    ) {
    Column (modifier) {
        WaterCounter(modifier)

        val list = remember { getWellnessTasks().toMutableStateList() }
        WellnessTaskList(
            list = wellnessViewModel.tasks,
            modifier = modifier,
            onCloseTask = { task -> wellnessViewModel.remove(task) },
            onCheckedTask = { task, checked -> wellnessViewModel.changeTaskChecked(task, checked) }
        )
    }
}

private fun getWellnessTasks() = List(30) {i -> WellnessTask(i, "Task #$i")}