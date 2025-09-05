import React from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";

const TaskModal = ({
  task,
  users,
  isAdmin,
  currentUser,
  onClose,
  onSubmit,
}) => {
  const isEditing = !!task;
  const canEditTitleAndDate = isAdmin || !isEditing;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      status: task?.status || "pending",
      priority: task?.priority || "medium",
      due_date: task?.due_date ? task.due_date.split("T")[0] : "",
      user_id: task?.user_id || currentUser?.id || "",
    },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "in_progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
  ];

  const priorityOptions = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  const userOptions = users.map((user) => ({
    value: user.id,
    label: user.username,
  }));

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            {isEditing ? "Edit Task" : "Create Task"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <Input
            label="Title"
            error={errors.title?.message}
            disabled={!canEditTitleAndDate}
            placeholder={
              !canEditTitleAndDate
                ? "Only administrators can edit task titles"
                : ""
            }
            {...register("title", {
              required: "Title is required",
              maxLength: {
                value: 255,
                message: "Title must be less than 255 characters",
              },
            })}
          />

          <Textarea
            label="Description"
            error={errors.description?.message}
            {...register("description", {
              maxLength: {
                value: 1000,
                message: "Description must be less than 1000 characters",
              },
            })}
          />

          <div className="grid grid-cols-2 gap-4">
            <Select
              label="Status"
              options={statusOptions}
              error={errors.status?.message}
              {...register("status", {
                required: "Status is required",
              })}
            />

            <Select
              label="Priority"
              options={priorityOptions}
              error={errors.priority?.message}
              {...register("priority", {
                required: "Priority is required",
              })}
            />
          </div>

          <Input
            label="Due Date"
            type="date"
            error={errors.due_date?.message}
            disabled={!canEditTitleAndDate}
            placeholder={
              !canEditTitleAndDate
                ? "Only administrators can edit due dates"
                : ""
            }
            {...register("due_date")}
          />

          {isAdmin && (
            <Select
              label="Assign To"
              options={userOptions}
              error={errors.user_id?.message}
              {...register("user_id", {
                required: "User assignment is required",
              })}
            />
          )}

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {isEditing ? "Update Task" : "Create Task"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
