<script setup>
  const tabs = ref(null)
  const title = ref('Donation')

  useHead({
    titleTemplate: (titleChunk) => {return titleChunk ? `${title.value} | ${titleChunk}` : 'Resilient Girls Network'},
    meta: [
      { name: 'description', content: '' }
    ],
  })

</script>

<template>
  <v-container>
    <h1 class="text-info text-uppercase">Donation</h1>
    <v-card>
      <v-toolbar>
      
        <template v-slot:extension>
          <v-tabs
            v-model="tabs"
            color="primary"
            grow
          >
            <v-tab
              :value="1"
            >
              One-Time Donation
            </v-tab>

            <v-tab
              :value="2"
            >
              Recurring Donation
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-window v-model="tabs">
        <v-window-item
          v-for="i in 2"
          :key="i"
          :value="i"
        >
          <v-card>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas aperiam blanditiis, doloremque ab veritatis fugit facere enim pariatur soluta nam, placeat vel culpa, dolore reprehenderit autem. Minima vel doloribus nobis iusto, commodi impedit? Aliquid aut eveniet voluptatibus esse! Unde animi dolor possimus rem cum impedit dicta tempora earum adipisci repudiandae harum ea ut error explicabo, suscipit veritatis excepturi vel libero distinctio quod, totam consequuntur, aperiam repellendus. Reprehenderit esse provident aspernatur tempore, culpa eveniet, sed consectetur, et ducimus placeat rem nobis illo earum ab modi est hic quibusdam nisi explicabo dolor natus velit animi aut quos. Qui eos molestias tempore exercitationem deserunt, est asperiores. Voluptas at eligendi quae atque dolores ratione! Laborum, sint! Error, nemo? Temporibus dolore quisquam excepturi odio, labore nulla cum. Illo delectus ad, laborum expedita earum accusantium pariatur sunt dolores tenetur minima corrupti autem reiciendis commodi molestias, doloremque consequuntur dolore nulla. Minus nemo est veritatis reprehenderit modi nesciunt neque? Magnam dolorem reprehenderit nostrum impedit eius a veritatis, quibusdam excepturi aliquid labore dignissimos velit accusantium accusamus vel, officiis in laboriosam quasi. Molestias corrupti porro, consequuntur numquam eum cupiditate voluptas quaerat voluptatum inventore sapiente eos laborum deleniti maxime quo. Rerum, reprehenderit tempore pariatur ipsa perspiciatis perferendis dignissimos harum ad error voluptatem officia, accusantium dicta quae non vero ex inventore similique mollitia unde laborum quam! Quasi consequuntur amet animi odit asperiores laudantium nulla cupiditate mollitia exercitationem, eum quia. Minus dolore sed delectus eum. Veritatis animi soluta id deserunt ut amet reiciendis laborum quas ea est tempore vitae, molestiae vero iste placeat architecto non doloremque obcaecati ex consequuntur itaque quos nulla ad! Natus eaque corporis eveniet optio aperiam iusto dicta quidem porro. Distinctio consequuntur quos, quod debitis quaerat quam porro ipsa voluptate repellat veniam! Deserunt culpa cumque ipsam provident nam molestias dignissimos nostrum eaque, veniam eius saepe quo maiores. Ab, dignissimos quod! Laborum magni exercitationem harum, distinctio expedita reprehenderit praesentium. Possimus fuga corporis amet, quae officia dolorum rem voluptatem tenetur pariatur sit eum cum suscipit dicta aliquid ex voluptas saepe quia omnis alias accusamus. Natus enim maxime inventore doloribus ad totam minima iste cumque quasi corrupti. Recusandae, architecto soluta consectetur excepturi consequuntur eveniet itaque quam, ad et beatae eligendi eos modi debitis repellat. Modi officiis, perferendis labore expedita aperiam praesentium molestias aliquam repellat sint voluptas enim possimus, voluptatum odio facilis. Ut repellendus quia placeat, eum facilis inventore obcaecati suscipit similique minus delectus optio est quisquam cumque numquam molestiae! Voluptatibus eum culpa nostrum omnis, iste, harum veritatis nihil molestiae assumenda atque odit suscipit? Non unde reprehenderit similique quasi et, error atque, delectus assumenda consectetur amet quaerat quos totam, reiciendis optio placeat minima officia doloribus iste dolorem ratione incidunt dignissimos libero. Amet accusantium omnis placeat doloribus recusandae cupiditate unde eius distinctio ab nesciunt voluptatem sit, aliquid quidem voluptatibus soluta eaque nobis hic laudantium praesentium. Similique quasi consequatur fuga, error sequi sed quis placeat illo voluptatum distinctio enim deserunt harum incidunt maiores id ut molestiae at? Eum asperiores velit blanditiis veritatis illum vel nostrum minima saepe praesentium sint maxime voluptas repudiandae sed quae voluptate, totam aut? Esse beatae praesentium minima vitae odit suscipit ipsa corrupti eveniet velit, necessitatibus eligendi, quasi ex ut a voluptatum reprehenderit fuga? Provident odit impedit saepe velit, error aut enim aspernatur. Voluptatum earum repellendus explicabo at quas ea repellat aliquam. Ipsam sint sunt quasi quis eveniet voluptas quaerat ut illo doloribus accusantium, hic repellendus sapiente commodi corrupti temporibus earum, obcaecati ad quia optio qui quam soluta deserunt minima! Doloribus dignissimos sint reiciendis, ab perspiciatis consectetur eum laborum optio repudiandae enim magnam veritatis modi, repellendus vero sapiente unde est hic adipisci dolorum! Voluptates at nemo fugiat accusantium, sit nesciunt ipsum id provident inventore explicabo, fugit libero placeat aliquam officia earum animi nihil amet! Asperiores similique nihil consequuntur inventore voluptatum, maiores, incidunt commodi laudantium unde ipsam quia molestiae. Quas explicabo quam aperiam itaque ducimus quis optio suscipit, cupiditate nobis qui quasi perspiciatis quisquam distinctio consequatur quod ipsam quos quaerat a nesciunt. Deleniti tempore ratione sequi voluptatum blanditiis deserunt ullam architecto voluptate tempora quidem sunt sint molestiae explicabo cumque voluptatibus expedita repellat inventore quasi reprehenderit hic mollitia, ducimus unde ut. Rem voluptatem tempore aliquid laboriosam, vitae eaque veniam accusamus, autem quae praesentium, repellendus sunt voluptatum. A repudiandae dolore accusantium nisi earum officiis iure.
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>
