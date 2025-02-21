export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };
  
  export const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };
  