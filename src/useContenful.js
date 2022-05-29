import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "xd2120uguiqw",
    accessToken: "zxN1svY1J8QHgpWN-zG6nt4BbjM2bnX71ol4lulIngU",
    host: "preview.contentful.com"
  });

  const getEmployees = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "employee",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const image = item.fields.image.fields;
        return {
          ...item.fields,
          image
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getEmployees };
};

export default useContentful;
