import { useState } from "react";
import Modal from "../../ui/Modal";
import { MdEdit, MdDelete } from "react-icons/md";
import { truncate } from "../../utils/truncate";
import { toLocalDate } from "../../utils/toLocalDate";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useRemoveOwnerProject } from "./useRemoveOwnerProject";
import CreateOwnerProjectForm from "./CreateOwnerProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link, useLocation } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

const Project = ({ project, projectNum }) => {
  const [showRemoveProject, setShowRemoveProject] = useState(false);
  const [showEditProject, setShowEditProject] = useState(false);
  const { mutate: removeProject, isPending: disabled } =
    useRemoveOwnerProject();
  const { pathname } = useLocation();
  const desierdPath = pathname.split("/").at(1);
  return (
    <tr className="bg-bg_primary border-b-[1px] border-border ">
      <td className="px-6 py-4 hidden md:table-cell">{projectNum}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-text_primary whitespace-nowrap"
      >
        <Link to={`/${desierdPath}/projects/${project._id}`}>
          {truncate(project.title, 24)}
        </Link>
      </th>
      <td className="px-6 py-4">
        <ToggleProjectStatus project={project} />
      </td>
      <td className="px-6 py-4 hidden md:table-cell">
        {project.category.title}
      </td>
      <td className="px-6 py-4 hidden md:table-cell">{project.budget}$</td>
      <td className="px-6 py-4 hidden md:table-cell">
        {toLocalDate(project.deadline)}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-center gap-5">
          <MdDelete
            className="w-5 h-5 cursor-pointer text-error"
            onClick={() => setShowRemoveProject(true)}
          />
          <Modal
            title="Delete Project"
            open={showRemoveProject}
            onClose={() => setShowRemoveProject(false)}
          >
            <ConfirmDelete
              title={project.title}
              onClose={() => setShowRemoveProject(false)}
              disabled={disabled}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => setShowRemoveProject(false),
                })
              }
            />
          </Modal>
          <MdEdit
            className="w-5 h-5 cursor-pointer text-warning"
            onClick={() => setShowEditProject(true)}
          />
          <Modal
            createProject={true}
            title="Edit Project"
            open={showEditProject}
            onClose={() => setShowEditProject(false)}
          >
            <CreateOwnerProjectForm
              projectToEdit={project}
              onClose={() => setShowEditProject(false)}
            />
          </Modal>
          <Link to={`/${desierdPath}/projects/${project._id}`}>
            <IoMdEye className="w-5 h-5 cursor-pointer text-success" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default Project;
