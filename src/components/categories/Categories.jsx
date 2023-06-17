import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import "./style.css";
import { useState } from "react";
import Add from "./Add";
import Edit from "./Edit";

const Categories = ({ categories, setCatregories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div>
      <ul className="flex md:flex-col gap-4 text-lg">
        {categories.map((item) => (
          <li className="category-item" key={item._id}>
            <span>{item.title}</span>
          </li>
        ))}

        <li
          className="category-item !bg-purple-800 hover:opacity-90"
          onClick={() => setIsAddModalOpen(true)}
        >
          <PlusOutlined className="md:text-2xl" />
        </li>
        <li
          className="category-item !bg-orange-600 hover:opacity-90"
          onClick={() => setIsEditModalOpen(true)}
        >
          <EditOutlined className="md:text-2xl" />
        </li>
        <Add
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          setCatregories={setCatregories}
          categories={categories}
        />
        <Edit
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          categories={categories}
          setCatregories={setCatregories}
        />
      </ul>
    </div>
  );
};

export default Categories;
