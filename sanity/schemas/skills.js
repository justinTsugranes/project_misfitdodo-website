export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'Icon',
      type: 'cloudinary.asset',
      options: {
        hotspot: true,
      },
    },
  ],
}
