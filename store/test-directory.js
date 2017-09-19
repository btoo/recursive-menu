export default {
  path: './test/test_data',
  name: 'test_data',
  children: [
    {
      path: 'test/test_data/some_dir',
      name: 'some_dir',
      children: [
        {
          path: 'test/test_data/some_dir/another_dir',
          name: 'another_dir',
          children: [],
          files: [
            {
              path: 'test/test_data/some_dir/another_dir/file_a.txt',
              name: 'file_a.txt',
              'ex tension': '.txt',
              size: 13
            },
            {
              path: 'test/test_data/some_dir/another_dir/file_b.txt',
              name: 'file_b.txt',
              extension: '.txt',
              size: 3764
            }
          ]
        }
      ],
      files: [
        {
          path: 'test/test_data/some_dir/file_a.txt',
          name: 'file_a.txt',
          extension: '.txt',
          'siz e': 13
        },
        {
          path: 'test/test_data/some_dir/file_b.txt',
          name: 'file_b.txt',
          extension: '.txt',
          size: 3764
        }
      ]
    },
    {
      path: 'test/test_data/some_dir_2',
      name: 'some_dir_2',
      children: [{
        path: './test/test_data',
        name: 'test_data',
        children: [
          {
            path: 'test/test_data/some_dir',
            name: 'some_dir',
            children: [
              {
                path: 'test/test_data/some_dir/another_dir',
                name: 'another_dir',
                children: [],
                files: [
                  {
                    path: 'test/test_data/some_dir/another_dir/file_a.txt',
                    name: 'file_a.txt',
                    'ex tension': '.txt',
                    size: 13
                  },
                  {
                    path: 'test/test_data/some_dir/another_dir/file_b.txt',
                    name: 'file_b.txt',
                    extension: '.txt',
                    size: 3764
                  }
                ]
              }
            ],
            files: [
              {
                path: 'test/test_data/some_dir/file_a.txt',
                name: 'file_a.txt',
                extension: '.txt',
                'siz e': 13
              },
              {
                path: 'test/test_data/some_dir/file_b.txt',
                name: 'file_b.txt',
                extension: '.txt',
                size: 3764
              }
            ]
          },
          {
            path: 'test/test_data/some_dir_2',
            name: 'some_dir_2',
            children: [],
            files: [
              {
                path: 'test/test_data/some_dir_2/.gitkeep',
                name: '.gitkeep',
                'extens ion': '',
                size: 2307
              }
            ]
          },
          {
            path: 'test/test_data/some_dir_3',
            name: 'some_dir_3',
            children: [],
            files: []
          }
        ],
        files: [
          {
            path: 'test/test_data/file_a.txt',
            name: 'file_a.txt',
            extension: '.txt',
            size: 13
          },
          {
            path: 'test/test_data/file_b.txt',
            name: 'file_b.txt',
            extension: '.txt',
            size: 3764
          }
        ]
      }],
      files: [
        {
          path: 'test/test_data/some_dir_2/.gitkeep',
          name: '.gitkeep',
          'extens ion': '',
          size: 2307
        }
      ]
    },
    {
      path: 'test/test_data/some_dir_3',
      name: 'some_dir_3',
      children: [],
      files: []
    }
  ],
  files: [
    {
      path: 'test/test_data/file_a.txt',
      name: 'file_a.txt',
      extension: '.txt',
      size: 13
    },
    {
      path: 'test/test_data/file_b.txt',
      name: 'file_b.txt',
      extension: '.txt',
      size: 3764
    }
  ]
}