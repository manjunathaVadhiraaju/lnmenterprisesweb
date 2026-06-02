# Comprehensive Flutter Clean Architecture & GetX Project Blueprint
## LNM Enterprises Landing Page

This document provides a production-grade, highly-structured Flutter project blueprint designed around **Clean Architecture principles** and powered by **GetX** for state management, dependency injection, and reactive UI updates.

---

### 1. Proposed Project Directory Structure

Use this folder architecture in your new Flutter project's `lib` directory:

```text
lib/
├── core/
│   ├── theme/
│   │   └── app_theme.dart          # Ambient dark styling & Google Fonts bindings
│   └── constants/
│       └── business_constants.dart # Standardized URLs, address details, and phone routing
├── features/
│   └── landing/
│       ├── data/
│       │   ├── models/
│       │   │   ├── service_model.dart
│       │   │   └── portfolio_item_model.dart
│       │   └── repositories/
│       │       └── landing_repository_impl.dart
│       ├── domain/
│       │   ├── entities/
│       │   │   ├── service_entity.dart
│       │   │   └── portfolio_entity.dart
│       │   ├── repositories/
│       │   │   └── landing_repository.dart
│       │   └── usecases/
│       │       ├── get_services_usecase.dart
│       │       └── get_portfolio_usecase.dart
│       └── presentation/
│           ├── bindings/
│           │   └── landing_binding.dart
│           ├── controllers/
│           │   └── landing_controller.dart
│           ├── views/
│           │   ├── landing_view.dart
│           │   └── widgets/
│           │       ├── hero_section.dart
│           │       ├── about_section.dart
│           │       ├── services_section.dart
│           │       ├── portfolio_section.dart
│           │       └── contact_section.dart
└── main.dart                       # Entry point configured with GetMaterialApp
```

---

### 2. Pubspec Configuration (`pubspec.yaml`)

Initialize your dependencies using these exact modern versions:

```yaml
name: lnm_clean_getx
description: "LNM Enterprises Landing Page with Clean Architecture & GetX"
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  get: ^4.6.6                    # State management, navigation, dependency injection
  google_fonts: ^6.1.0           # Display typography configuration
  url_launcher: ^6.2.2           # Interactive dialer redirects and WhatsApp APIs
  flutter_animate: ^4.2.0.1      # Micro-interactions for scrolling layouts
  cupertino_icons: ^1.0.5

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
```

---

### 3. Core Layer Customizations

#### `/lib/core/theme/app_theme.dart`
```dart
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  static const Color darkCanvas = Color(0xFF130924); // Deep ambient dark purple
  static const Color surfaceCard = Color(0xFF241348); // Bento card purple
  static const Color accentAmber = Color(0xFFF59E0B); // Amber actions/highlights
  static const Color techBlue = Color(0xFF3B82F6);    // Support category highlight

  static ThemeData get themeData {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      scaffoldBackgroundColor: darkCanvas,
      colorScheme: const ColorScheme.dark(
        primary: accentAmber,
        secondary: techBlue,
        surface: surfaceCard,
        onSurface: Colors.white,
      ),
      textTheme: GoogleFonts.interTextTheme(ThemeData.dark().textTheme),
    );
  }
}
```

#### `/lib/core/constants/business_constants.dart`
```dart
class BusinessConstants {
  static const String appName = 'LNM Enterprises';
  static const String tagline = 'Tailoring Innovation with Technology';
  static const String location = 'Ballari, Karnataka – 583101';
  static const String fullAddress = '1st Cross, Anjinappa Nagar, Rupanagudi Road, Ballari – 583101, Karnataka, India (Landmark: Near Varabassappa Anganwadi Government School)';
  
  // Cleanly bifurcated support numbers
  static const String tailoringPhone = '+91 9483725426'; 
  static const String softwarePhone = '+91 9449254265';  
  static const String email = 'a99manjunatha@gmail.com';
  static const String hours = 'Monday – Saturday: 9:00 AM – 7:00 PM (Sunday Closed)';
  static const String whatsappNumber = '919483725426';
}
```

---

### 4. Domain Layer (Pure Business Logic)

#### `/lib/features/landing/domain/entities/service_entity.dart`
```dart
import 'package:flutter/material.dart';

class ServiceEntity {
  final String id;
  final String title;
  final String category;
  final String description;
  final String pricing;
  final List<String> features;
  final IconData icon;

  const ServiceEntity({
    required this.id,
    required this.title,
    required this.category,
    required this.description,
    required this.pricing,
    required this.features,
    required this.icon,
  });
}
```

#### `/lib/features/landing/domain/entities/portfolio_entity.dart`
```dart
class PortfolioEntity {
  final String id;
  final String title;
  final String category;
  final String description;
  final String imageUrl;
  final List<String> tags;
  final String client;
  final String date;

  const PortfolioEntity({
    required this.id,
    required this.title,
    required this.category,
    required this.description,
    required this.imageUrl,
    required this.tags,
    required this.client,
    required this.date,
  });
}
```

#### `/lib/features/landing/domain/repositories/landing_repository.dart`
```dart
import '../entities/service_entity.dart';
import '../entities/portfolio_entity.dart';

abstract class LandingRepository {
  Future<List<ServiceEntity>> fetchServices();
  Future<List<PortfolioEntity>> fetchPortfolioItems();
}
```

#### `/lib/features/landing/domain/usecases/get_services_usecase.dart`
```dart
import '../entities/service_entity.dart';
import '../repositories/landing_repository.dart';

class GetServicesUseCase {
  final LandingRepository repository;

  GetServicesUseCase(this.repository);

  Future<List<ServiceEntity>> call() async {
    return await repository.fetchServices();
  }
}
```

---

### 5. Data Layer (Models and Datasources)

#### `/lib/features/landing/data/models/service_model.dart`
```dart
import 'package:flutter/material.dart';
import '../../domain/entities/service_entity.dart';

class ServiceModel extends ServiceEntity {
  const ServiceModel({
    required super.id,
    required super.title,
    required super.category,
    required super.description,
    required super.pricing,
    required super.features,
    required super.icon,
  });
}
```

#### `/lib/features/landing/data/repositories/landing_repository_impl.dart`
```dart
import 'package:flutter/material.dart';
import '../../domain/entities/service_entity.dart';
import '../../domain/entities/portfolio_entity.dart';
import '../../domain/repositories/landing_repository.dart';
import '../models/service_model.dart';
import '../../domain/entities/portfolio_entity.dart'; // Simple dynamic representation

class LandingRepositoryImpl implements LandingRepository {
  @override
  Future<List<ServiceEntity>> fetchServices() async {
    // Standard mock list conforming to business guidelines
    return const [
      ServiceModel(
        id: 't-womens-tailoring',
        title: "Women's Tailoring & Custom Stitching",
        category: 'Tailoring',
        description: 'Expert, custom tailoring matching your personal fit, from bridal catalogs to daily kurtis.',
        pricing: 'Starts from ₹300',
        features: ['Trial rooms standard', 'Express within 24 hours available'],
        icon: Icons.content_cut,
      ),
      ServiceModel(
        id: 't-blouse-stitching',
        title: 'Designer Blouse Stitching',
        category: 'Tailoring',
        description: 'Custom bridal matching, padded linings, princess selections, and creative neck pattern embroidery.',
        pricing: 'Starts from ₹450',
        features: ['Reinforced stitching', 'Custom tassels and hooks'],
        icon: Icons.auto_awesome,
      ),
      ServiceModel(
        id: 's-mobile-apps',
        title: 'Android & iOS App Development',
        category: 'Software',
        description: 'Responsive hybrid smartphone modules published safely on Google Play Console and App Store.',
        pricing: 'Custom Quote',
        features: ['GetX clean code configuration', 'Payment gates with callbacks'],
        icon: Icons.phone_android,
      ),
    ];
  }

  @override
  Future<List<PortfolioEntity>> fetchPortfolioItems() async {
    return const [
      PortfolioEntity(
        id: 'p-1',
        title: 'Bridal Matching Kanjeevaram Blouse',
        category: 'Tailoring',
        description: 'Heavy embroidery hand-stitch layout with customized back layout styling.',
        imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
        tags: ['Bridal', 'Precision Sizing'],
        client: 'Suhasini Gowda',
        date: 'April 2026',
      ),
    ];
  }
}
```

---

### 6. Presentation Layer (GetX Controllers & Clean Widgets)

#### `/lib/features/landing/presentation/bindings/landing_binding.dart`
```dart
import 'package:get/get.dart';
import '../../data/repositories/landing_repository_impl.dart';
import '../../domain/repositories/landing_repository.dart';
import '../../domain/usecases/get_portfolio_usecase.dart'; // optional / embedded
import '../../domain/usecases/get_services_usecase.dart';
import '../controllers/landing_controller.dart';

class LandingBinding extends Bindings {
  @override
  void dependencies() {
    // Dynamic Repos & Use Cases Injection
    Get.lazyPut<LandingRepository>(() => LandingRepositoryImpl());
    Get.lazyPut(() => GetServicesUseCase(Get.find<LandingRepository>()));

    // Controller Binding
    Get.put(LandingController(
      getServicesUseCase: Get.find<GetServicesUseCase>(),
    ));
  }
}
```

#### `/lib/features/landing/presentation/controllers/landing_controller.dart`
```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../domain/entities/service_entity.dart';
import '../../domain/usecases/get_services_usecase.dart';

class LandingController extends GetxController {
  final GetServicesUseCase getServicesUseCase;

  LandingController({required this.getServicesUseCase});

  // Reactive variables
  var servicesList = <ServiceEntity>[].obs;
  var isLoading = true.obs;
  var currentCategoryFilter = 'All'.obs;
  
  // Custom contact form controllers
  final nameController = TextEditingController();
  final phoneController = TextEditingController();
  final messageController = TextEditingController();

  @override
  void onInit() {
    super.onInit();
    loadServices();
  }

  Future<void> loadServices() async {
    try {
      isLoading(true);
      var fetched = await getServicesUseCase();
      servicesList.assignAll(fetched);
    } finally {
      isLoading(false);
    }
  }

  void updateFilter(String category) {
    currentCategoryFilter.value = category;
  }

  List<ServiceEntity> get filteredServices {
    if (currentCategoryFilter.value == 'All') {
      return servicesList;
    }
    return servicesList.where((s) => s.category.toLowerCase() == currentCategoryFilter.value.toLowerCase()).toList();
  }

  Future<void> triggerWhatsAppInteraction({String text = ''}) async {
    final String formattedString = Uri.encodeComponent(text);
    final String url = 'https://wa.me/919483725426?text=$formattedString';
    await launchInBrowser(url);
  }

  Future<void> launchInBrowser(String urlString) async {
    final Uri url = Uri.parse(urlString);
    if (!await launchUrl(url, mode: LaunchMode.externalApplication)) {
      Get.snackbar('Interaction Error', 'Could not parse navigation coordinates.', snackPosition: SnackPosition.BOTTOM);
    }
  }
}
```

#### `/lib/features/landing/presentation/views/landing_view.dart`
```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import '../controllers/landing_controller.dart';
import '../../../../core/constants/business_constants.dart';

class LandingView extends GetView<LandingController> {
  const LandingView({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final bool isDesktop = screenWidth > 800;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF1E0D3C),
        elevation: 0,
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFFFBBF24), Color(0xFFEA580C)],
                ),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Text(
                'LNM',
                style: GoogleFonts.spaceGrotesk(
                  fontWeight: FontWeight.extrabold,
                  fontSize: 16,
                  color: const Color(0xFF0F052D),
                ),
              ),
            ),
            const SizedBox(width: 8),
            Text(
              'Enterprises',
              style: GoogleFonts.spaceGrotesk(fontSize: 18, fontWeight: FontWeight.bold),
            )
          ],
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Hero
            _buildHero(isDesktop),
            
            // Services with GetX Obx filtering
            _buildServicesSection(screenWidth),
          ],
        ),
      ),
    );
  }

  Widget _buildHero(bool isDesktop) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 24),
      decoration: const BoxDecoration(
        gradient: RadialGradient(
          colors: [Color(0xFF2C1952), Color(0xFF130924)],
        ),
      ),
      child: Column(
        children: [
          Text(
            'LNM Enterprises Clean Platform',
            style: GoogleFonts.spaceGrotesk(color: Colors.amber[300], letterSpacing: 2, fontSize: 10, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 16),
          Text(
            'Handcrafted Products Co-operating with State Managed Mobiles',
            textAlign: TextAlign.center,
            style: GoogleFonts.spaceGrotesk(fontSize: isDesktop ? 34 : 24, fontWeight: FontWeight.w900),
          ),
          const SizedBox(height: 24),
          ElevatedButton(
            onPressed: () {
              controller.triggerWhatsAppInteraction(text: 'Hello LNM! I would like to inquire regarding GetX services.');
            },
            child: const Text('Direct WhatsApp Engagement'),
          ),
        ],
      ),
    );
  }

  Widget _buildServicesSection(double screenWidth) {
    return Padding(
      padding: const EdgeInsets.all(24.0),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _buildCategoryTab('All'),
              _buildCategoryTab('Tailoring'),
              _buildCategoryTab('Software'),
            ],
          ),
          const SizedBox(height: 30),
          Obx(() {
            if (controller.isLoading.value) {
              return const Center(child: CircularProgressIndicator());
            }
            final list = controller.filteredServices;
            return GridView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: list.length,
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: screenWidth > 800 ? 3 : 1,
                childAspectRatio: 1.2,
                crossAxisSpacing: 16,
                mainAxisSpacing: 16,
              ),
              itemBuilder: (context, i) {
                final item = list[i];
                return Card(
                  color: Colors.white.withOpacity(0.06),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Icon(item.icon, color: Colors.amber[300]),
                        const SizedBox(height: 12),
                        Text(item.title, style: const TextStyle(fontWeight: FontWeight.bold)),
                        const SizedBox(height: 8),
                        Text(item.description, style: const TextStyle(fontSize: 12, color: Colors.white70)),
                      ],
                    ),
                  ),
                );
              },
            );
          }),
        ],
      ),
    );
  }

  Widget _buildCategoryTab(String tabName) {
    return Obx(() {
      final isSelected = controller.currentCategoryFilter.value == tabName;
      return Padding(
        padding: const EdgeInsets.symmetric(horizontal: 4.0),
        child: ChoiceChip(
          label: Text(tabName),
          selected: isSelected,
          onSelected: (_) => controller.updateFilter(tabName),
          selectedColor: Colors.amber[500],
          backgroundColor: Colors.white10,
        ),
      );
    });
  }
}
```

---

### 7. Core Application Entrypoint (`/lib/main.dart`)

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'core/theme/app_theme.dart';
import 'features/landing/presentation/bindings/landing_binding.dart';
import 'features/landing/presentation/views/landing_view.dart';

void main() {
  runApp(const CleanApp());
}

class CleanApp extends StatelessWidget {
  const CleanApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'LNM Enterprises',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.themeData,
      initialBinding: LandingBinding(),
      home: const LandingView(),
    );
  }
}
```
